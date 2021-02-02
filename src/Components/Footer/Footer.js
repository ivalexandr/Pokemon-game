import classNames from 'classnames'
import classes from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer>
            <div className={classNames(classes.wrapper)}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}

export default Footer