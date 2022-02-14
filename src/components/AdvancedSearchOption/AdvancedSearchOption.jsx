import "./AdvancedSearchOption.css"

function AdvancedSearchOption({ parameter, setSearchParameters, searchParameters }) {

  function handleSetSearchParamters(parameter) {
    const updatedParameters = searchParameters.map(p => (
      parameter.name === p.name
        ? {name: p.name, display: p.display, selected: !p.selected}
        : {name: p.name, display: p.display, selected: false}
    ))
    console.log('parameters', updatedParameters)
    setSearchParameters(updatedParameters);
  }

  return (
    <button
      className={parameter.selected ? "advanced-selected" : "advanced-button"}
      onClick={() => handleSetSearchParamters(parameter)}
    >
      {parameter.display}
    </button>
  )
}

export default AdvancedSearchOption