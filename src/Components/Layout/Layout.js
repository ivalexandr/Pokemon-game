import classes from './Layout.module.css'
const Layout = ({id, urlBg, colorBg, title, children}) => {
return (
    <section style={urlBg ? {backgroundImage:`url(${urlBg})`} : {backgroundColor:`${colorBg}`}} className={classes.root} id={id}>
    <div className={classes.wrapper}>
        <article>
            <div className={classes.title}>
                <h3>{title}</h3>
                <span className={classes.separator}></span>
            </div>
            <div className= {`${classes.desc} ${classes.full}`}>
                {children}
            </div>
        </article>
    </div>
</section>
)
}
export default Layout