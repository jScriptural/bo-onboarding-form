import myLogo from '/mylogo.svg';
import johnLogo from '/johnlogo.svg';


export default function Header(){
  return (
    <section id="header">
      <header>
	<img src={johnLogo} alt="logo" />
      </header>
    </section>
  )
}
