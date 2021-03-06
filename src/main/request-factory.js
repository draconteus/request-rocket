function convertToKeyValuePairs(headers) {
  return headers.reduce((accumulator, header) => {
    if (header.name in accumulator) {
      accumulator[header.name.toLowerCase()] += `,${header.value}`;
    } else {
      accumulator[header.name.toLowerCase()] = header.value;
    }

    return accumulator;
  }, {});
}

export default {
  create({ requestDetails: { method, url, headers, body } }) {
    return {
      method,
      url,
      headers: convertToKeyValuePairs(headers),
      body
    };
  }
};
