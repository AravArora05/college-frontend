const DetailItem = ({title, description, icon}) => {
    return (
        <div className="flex flex-col items-center p-4 min-w-[300px] bg-white rounded-lg shadow-md w-80">
          <img src={icon} alt={`${title} icon`} className="h-20 mb-2" />
          <h3 className="text-xl font-bold text-sky-900 mb-2">{title}</h3>
          <p className="text-center text-db font-bold text-blue-700">{description}</p>
        </div>
      );
      
};
export default DetailItem;