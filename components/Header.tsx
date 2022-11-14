import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Englearn</span>
        <p>Learn English with us</p>
      </h1>
    </div>
  )
}

export default Header