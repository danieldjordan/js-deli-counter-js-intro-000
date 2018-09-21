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

function currentLine(deliLine){
  if(deliLine>0){
    let message = 'The line is currently: ' 
    for(i = 0; i < deliLine.length; i++){
      message += `${i+1}. ${deliLine[i]}, `
    }
    return message;
  }
}
