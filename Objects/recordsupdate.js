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
    delete records[id][prop];  // ❌ You had: delete records.prop (wrong — ignores id, uses dot notation for dynamic prop)
  } else if (prop !== 'tracks') {
    records[id][prop] = value;  // ❌ You had: prop !== records.tracks (comparing string to object) and records.prop (wrong access)
  } else if (!records[id].tracks) {
    records[id].tracks = [value];  // ❌ You had: created newArr but never assigned it to the record
  } else {
    records[id].tracks.push(value);  // ❌ You had: records.tracks.push (missing [id])
  }

  return records;  // ✅ This was correct
}