var data = `474
357
365
758
489
478
579
390
`
var dataarr = data.split('\n');


console.log(dataarr.map((value) =>{
    return parseInt(value)
}))
