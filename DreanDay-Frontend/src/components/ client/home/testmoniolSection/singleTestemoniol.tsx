

const ClientSingleTestimony = ({ item }) => {
  return (
    <div className="bg-white flex items-stretch gap-6 p-6 rounded-xl shadow-md min-w-[500px]">
      
      <div className="w-[260px] flex flex-col justify-between">
        <span className="text-3xl">“</span>

        <p className="text-gray-700">{item.description}</p>

        <div>
          <p className="font-semibold">Iriboneye Nina</p>
          <p className="text-gray-500 text-sm">
            nina@ceremony.rw
          </p>
        </div>
      </div>

      <div className="w-[200px] h-[220px] overflow-hidden rounded-xl">
        <img
          src={item.src}
          alt="student"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ClientSingleTestimony;