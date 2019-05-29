export const kve = function() {
  const flatten = (function() {
    const args = [];
    return function(arr) {
      for (let i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
          flatten(arr[i]);
        } else {
          args.push(arr[i]);
        }
      }
      return args;
    };
  })();

  const args = flatten(arguments);
  let fn = args.pop();
  if (typeof fn !== "function") {
    args.push(fn);
    fn = false;
  }

  if (args.length > 0) {
    let obj = {};
    for (let i = 0, len = args.length; i < len; i++) {
      fn ? (obj[fn(args[i])] = fn(args[i])) : (obj[args[i]] = args[i]);
    }
    return obj;
  }
  return {};
};

export const kfn = {
  upper: key => {
    return typeof key === "string" ? key.toUpperCase() : key;
  },

  lower: key => {
    return typeof key === "string" ? key.toLowerCase() : key;
  },

  hump: key => {
    return typeof key === "string"
      ? key.replace(/\_(\w)/g, function(text, letter) {
          return letter.toUpperCase();
        })
      : key;
  },

  line: key => {
    return typeof key === "string"
      ? key.replace(/([A-Z])/g, "_$1").toLowerCase()
      : key;
  }
};
