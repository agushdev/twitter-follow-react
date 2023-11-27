import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="agushdev" name="Agustin Ponce"/>
      <TwitterFollowCard isFollowing={false} userName="midudev" name="Miguel Angel Duran"/>
      <TwitterFollowCard isFollowing userName="gonza" name="Gonzalo"/>
    </section>
    
  )
}