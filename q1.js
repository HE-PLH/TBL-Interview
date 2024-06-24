let input = [["Nairobi", "Nakuru"], ["Nakuru", "Eldoret"], ["Eldoret", "Kisumu"]];
    // the destination is the last element in the array
    // the source is the first element in the array
    //assumption the source is the first element in the array

    let destination = input[input.length - 1][1];
    console.log("destination", destination);
    //destination path
    let destinationPath = [];
    // loop through the input array
    for (let i = 0; i < input.length; i++) {
        // get the source
        let source = input[i][0];
        // get the destination
        let destination = input[i][1];
        // check if the source is the same as the destination
        if (source === destination) {
            destinationPath.push(source);
            destinationPath.push(destination);
        }else{
            // if the source is not the same as the destination
            // push the source to the destination path
            destinationPath.push(source);
        }
    }
    console.log("Path: ", destinationPath.join(" -> ")+ " -> "+destination);