import classes from './Layout.module.css'
const Layout = (props) => {
return (
    <section style={props.urlBg ? {backgroundImage:`url(${props.urlBg})`} : {backgroundColor:`${props.colorBg}`}} className={classes.root} id={props.id}>
    <div className={classes.wrapper}>
        <article>
            <div className={classes.title}>
                <h3>{props.title}</h3>
                <span className={classes.separator}></span>
            </div>
            <div className= {`${classes.desc} ${classes.full}`}>
                <p>{props.descr}</p>
            </div>
        </article>
    </div>
</section>
)
}
export default Layout