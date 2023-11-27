import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName="agushdev">
        Agustin Ponce
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard userName="gonza">
        Gonzalo
      </TwitterFollowCard>
    </section>
    
  )
}