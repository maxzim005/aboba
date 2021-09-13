import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
	return <nav className={s.nav}>
		<div className={s.item}><NavLink to='/form_1' activeClassName={s.activeLink}>Form_1</NavLink></div>
		<div className={s.item}><NavLink to='/form_2' activeClassName={s.activeLink}>Form_2</NavLink></div>
	</nav>
}
export default Sidebar;