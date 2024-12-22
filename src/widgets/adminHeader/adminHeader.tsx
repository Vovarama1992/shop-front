import { Link } from 'react-router-dom'
import styles from './adminHader.module.scss'
import { FaSearch } from 'react-icons/fa'

export const AdminHeader = () => {
  const menuItems = [
    { id: 0, label: 'Главная', link: '/' },
    { id: 1, label: 'Статистика', link: '/statistics' },
    { id: 2, label: 'Сотрудники', link: '/employees' },
    { id: 3, label: 'Клиенты', link: '/clients' },
    { id: 4, label: 'Новости', link: '/news' },
    { id: 5, label: 'Статьи', link: '/articles' },
    { id: 6, label: 'Заказы', link: '/orders' },
    { id: 7, label: 'Товары', link: '/products' },
  ]

  return (
    <header className={styles.adminHeader}>
      <section className={styles.adminHeader_links}>
        {menuItems.map(i => (
          <Link to={'/admin' + i.link}>{i.label}</Link>
        ))}
      </section>
      <label>
        <FaSearch />
        <input type="text" placeholder='Поиск' />
      </label>
    </header>
  )
}
