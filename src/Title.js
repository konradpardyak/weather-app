import './Title.scss';

const Title = (props) => {
  const {title} = props
  return(
    <div className="title">{title}<span className="line"></span></div>
  )
}

export default Title;