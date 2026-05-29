const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

const updateRecords = (records, id, prop, value) => {

if (!value) {
  // If value is empty, remove the property from this record.
  // This handles the rule that blank values should delete the field.
  delete records[id][prop];
} else if (prop !== 'tracks') {
  // If the property is not "tracks", simply set/replace it.
  // For regular fields like albumTitle or artist, assign the new value.
  records[id][prop] = value;
} else if (!records[id].tracks) {
  // If prop is "tracks" but the record has no tracks array yet,
  // create a new array containing the single new track.
  records[id].tracks = [value];
} else {
  // If prop is "tracks" and the array already exists,
  // append the new track to the existing list.
  records[id].tracks.push(value);
}

  return records;  // ✅ This was correct
}