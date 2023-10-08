import { GridItems } from "../../home/components/GridItems"
import { grid2 } from "../data/grid"

export const AchievementsGrid = () => {
  return (
    <section className='flex flex-col bg-[#191919]'>
      <div className='flex justify-center py-5'>
        <h2 className='text-[#7fdbdf] text-2xl p-5 font-bold'>
          Achievements of the week
        </h2>
      </div>
      <div className="text-gray-300 grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6 md:w-11/12 m-auto">
        {
          grid2.map(({ name, imgLink, time, desc }) => (
            <GridItems key={name} name={name} alt={name} time={time} imgLink={imgLink} desc={desc}/>
          ))
        }
      </div>
      <div className='flex justify-center my-5'>
        <button className='border border-[#7fdbdf] text-[#7fdbdf] py-1.5 px-10'>
          See More
        </button>
      </div>
    </section>
  )
}
