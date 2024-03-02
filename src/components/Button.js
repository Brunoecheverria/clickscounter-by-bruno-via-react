function Button1({text, itsClickButton, handleClick}) {
    return (
      <button
      className={ itsClickButton ? 'click-button' : 'reset-button' } onClick={handleClick}>
        {text}
      </button>
    );
}

export default Button1;