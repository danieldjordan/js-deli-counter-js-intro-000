function takeANumber(deliLine, name){
  let currentCount = deliLine.length
  deliLine.push(name)
  return (`Welcome, ${name}. You are number ${currentCount+1} in line.`)
}

function nowServing(deliLine){
  if(deliLine>0){
    name = deliLine[deliLine.length-(deliLine.length-1)]
    deliLine.shift()
    return name
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
