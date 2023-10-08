
export const GridItems = ({name, alt, time, imgLink, desc}) => {
  return (
    <div>
        <img
        className='bg-white h-[250px] w-[500px] object-cover'
        src={imgLink}
        alt={alt}
        />
        <div className='flex flex-col pt-2 pb-3'>
          <div className="flex flex-col m-auto p-2">
            <h4 className='text-lg'>{name}</h4>
            <p className="flex content-center m-auto">({time})</p>
          </div>
            <p className="text-sm m-auto">{desc}</p>
        </div>
    </div>
  )
}
