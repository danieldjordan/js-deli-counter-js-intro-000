function takeANumber(deliLine, name){
  let currentCount = deliLine.length
  deliLine.push(name)
  return (`Welcome, ${name}. You are number ${currentCount+1} in line.`)
}

function nowServing(deliLine){
  if(deliLine.length>0){
    name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }

}
