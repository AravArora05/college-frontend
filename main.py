import requests
import json
from bs4 import BeautifulSoup
import re

data_fields = [
    'institution.displayName',
    'institution.isPublic',
    'institution.state',
    'institution.city',
    'institution.location',
    'institution.institutionalControl',
    'institution.rankingDisplayRank',
    'institution.rankingSortRank',
    'institution.primaryPhotoThumb',
    'searchData.enrollment.rawValue',
    'searchData.engineeringRepScore.rawValue',
    'searchData.computerScienceRepScore.rawValue',
    'searchData.nursingRepScore.rawValue',
    'searchData.satAvg.displayValue',
    'searchData.actAvg.displayValue',
    'searchData.tuition.displayValue',
    'searchData.acceptanceRate.displayValue',
    'searchData.costAfterAid.displayValue',
    'searchData.hsGpaAvg.rawValue',
    'searchData.percentReceivingAid.displayValue'
]

extra_admissions_fields = ["Application Deadline", "Application Fee", "Acceptance Rate"]
extra_student_fields = ["Total Enrollment", "Live On-Campus", "Athletic Association"]

REQUEST_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0'
}

def traverse(data, path):
    keys = path.split('.')
    for key in keys:
        if not data or key not in data:
            return None
        data = data[key]
    return data

college_data = {}

def retrieve_page_data(url):
    
    response = requests.get(url, headers=REQUEST_HEADERS)
    json_data = response.json()

    colleges = json_data['data']['items']

    for college in colleges:
        school_name = traverse(college, 'institution.displayName')
        if not school_name:
            continue

        college_info = {}
        for field in data_fields:
            college_info[field] = traverse(college, field)

        student_life_url = 'https://www.usnews.com/best-colleges/' + traverse(college, 'institution.urlName') + '-' + traverse(college, 'institution.primaryKey') + '/student-life'
        student_life_resp = requests.get(student_life_url, headers=REQUEST_HEADERS)
        soup = BeautifulSoup(student_life_resp.text, 'html.parser')

        for field in extra_student_fields:
            dt_element = soup.find('dt', string=re.compile(field, re.IGNORECASE))
            if dt_element is None:
                college_info[field] = None
                continue

            dd_element = dt_element.find_next_sibling('dd')
            if dd_element:
                college_info[field] = dd_element.text.strip()
            else:
                college_info[field] = None

        admissions_url = 'https://www.usnews.com/best-colleges/' + traverse(college, 'institution.urlName') + '-' + traverse(college, 'institution.primaryKey') + '/applying'
        admissions_resp = requests.get(admissions_url, headers=REQUEST_HEADERS)
        soup = BeautifulSoup(admissions_resp.text, 'html.parser')

        for field in extra_admissions_fields:
            dt_element = soup.find('dt', string=re.compile(field, re.IGNORECASE))
            if dt_element is None:
                college_info[field] = None
                continue

            dd_element = dt_element.find_next_sibling('dd')
            if dd_element:
                college_info[field] = dd_element.text.strip()
            else:
                college_info[field] = None

        college_data[school_name] = college_info

    next_page_url = json_data['meta'].get('rel_next_page_url')
    if next_page_url:
        retrieve_page_data(next_page_url)
   
        

retrieve_page_data('https://www.usnews.com/best-colleges/api/search?_sort=schoolName&_sortDirection=asc&_page=1')

output_file_path = 'college_data.json'
with open(output_file_path, 'w') as json_file:
    json.dump(college_data, json_file, indent=4)

