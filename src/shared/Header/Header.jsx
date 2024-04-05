import logo from '../../assets/logo.png'
import moment from 'moment';
export const Header = () => {
  return (
    <div className='text-center space-y-2'>
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className='text-xl font-medium'>{moment().format("dddd, MMMM, YYYY")}</p>
    </div>
  )
}
