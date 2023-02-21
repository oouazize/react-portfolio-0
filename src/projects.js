import cub3d from './Assets/cub3d.png'
import robofriends from './Assets/robofriends.png'
import webserver from './Assets/webserver.jpeg'
import soLong from './Assets/soLong.png'

export default function Projects() {
  const styleCards = "mt-10 w-80 h-60 shadow-wxl rounded-2xl transition-all hover:scale-105 cursor-pointer";
  return (
    <section>
      <div className='text-center p-10'>
        <h1 className='text-5xl font-bold font-burtons my-10'>Projects</h1>
        <div className='flex flex-wrap gap-10 justify-center'>
          <a href="https://oouazize.github.io/RoboFriends/" className={styleCards}><img src={robofriends} class="w-80 h-60 rounded-2xl" alt="" /></a>
          <a href="https://github.com/oouazize/Flicks" className={styleCards}><img src={webserver} class="w-80 h-60 rounded-2xl" alt="" /></a>
          <a href="https://github.com/oouazize/cub3d" className={styleCards}><img src={cub3d} class="w-80 h-60 rounded-2xl" alt="" /></a>
          <a href="https://github.com/oouazize/so_long" className={styleCards}><img src={soLong} class="w-80 h-60 rounded-2xl" alt="" /></a>
        </div>
      </div>
    </section>
  )
}
