import './features.scss'

function Features({title, text, source}) {
    return (
        <div className="feature-item">
        <img
          src={source}
          alt="Chat Icon"
          class="feature-icon"
        />
        <h3 className="feature-item-title">{title}</h3>
        <p>
          {text}
        </p>
      </div>
    )
}

export default Features