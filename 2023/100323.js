//Decompose single strand DNA into 3 reading frames - 7kyu
//

var decomposeSingleStrand= function( singleStrand){
  let frames = "";
  let count = 0;

  for (i=1; i<=3; i++) {
    let strand = singleStrand;
    frames += `Frame ${i}: `;

    if (i==2) {
      frames += `${singleStrand.slice(0,1)} `;
      strand = singleStrand.slice(1);
    }
    if (i==3) {
      frames += `${singleStrand.slice(0,2)} `;
      strand = singleStrand.slice(2);
    }

    for (j=0; j<strand.length; j+=3) {
      frames += `${strand.slice(j,j+3)} `;
    }

    frames = frames.trim();

    if (i!=3) {
      frames += "\n"
    }
  }

  return frames;
}
