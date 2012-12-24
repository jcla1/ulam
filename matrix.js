function translate(coords, d_old){
  if (d_old % 2 === 0){
    coords[1] -= 1;
  } else if (d_old % 2 === 1) {
    coords[0] -= 1;
  }

  return coords;
}

function check_if_drop_frame(coords, d){
  if (d % 2 === 0){
    if (coords[0] != d && coords[1] != 1){
      return true;
    } else {
      return false;
    }
  } else if (d % 2 === 1) {
    if (coords[0] != 1 && coords[1] != d){
      return true;
    } else {
      return false;
    }
  }
}

function check_values(coords, d){
  if (coords[0] < 1 || coords[1] < 1 || coords[0] > d || coords[1] > d || d < 1){
    console.log("Invalid values!");
    return false;
  }
  return true;
}

function work_out_value(coords, d){
  var val = -1;

  var x = coords[0],
      y = coords[1];

  if (d % 2 === 0){
    if (coords[1] === 1){
      val = Math.pow(d, 2) - (coords[0] - 1)
    } else if (coords[1] === d){
      val = Math.pow(d, 2) - 2 * (d - 1) - (d - 2) + (x - 1) - 1
    } else if (coords[0] === 1){
      val = Math.pow(d, 2) - 3 * (d - 1) - (d - 2) + (y - 2)
    } else if (coords[0] === d){
      val = Math.pow(d, 2) - d - (y - 2)
    }
  } else if (d % 2 === 1){
    if (coords[1] === 1){
      val = Math.pow(d, 2) - 2 * (d - 1) - (x - 1)
    } else if (coords[1] === d){
      val = Math.pow(d, 2) - (d - 1) + (x - 1)
    } else if (coords[0] === 1){
      val = Math.pow(d, 2) - 2 * (d - 1) + (y - 1)
    } else if (coords[0] === d){
      val = Math.pow(d, 2) - 3 * (d - 1) - (y - 1)
    }
  }
  return val;
}

function ulam(coords, d){
  if(!check_values(coords, d)) return -1;

  while (check_if_drop_frame(coords, d)){
    coords = translate(coords, d);
    d -= 1;
  }

  return work_out_value(coords, d);

}