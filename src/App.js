import style from './Style.module.scss'

export  const  App = () => {
  return (
    // DON'T WORK BECAUSE JAVASCRIPT DON'T UNDERSTAND "-" in variables  
    // <div className={style.hello-world}>Hello</div>
    // It's good work 
    // <div className={style["hello-world"]}>Hello</div>
    // <div className={style.helloWorld}>Hello</div>
    // <div className={style.hello_world}>Hello</div>
    null
    )
}
