
import data from '../data/elementos.json'
import Capitulo from '../components/chapter'
import Description from '../components/description'

export default function Home () {
  return (
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <Description />
        {data.map((data) => {
          return (
            <>
              <Capitulo info={data.capitulo}/>
            </>
          )
        })}
    </div>
  )
}
