function takeANumber(deliLine, name){
  let currentCount = deliLine.length
  deliLine.push("name")
  return (`Welcome, ${name}. You are number ${currentCount+1} in line.`)
}
