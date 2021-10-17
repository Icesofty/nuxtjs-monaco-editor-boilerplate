module.exports = {
  mode: 'jit',
  purge: {
    options: {
      // Whitelisting some classes to avoid purge
      safelist: [/^bg-/, /^text-/, /^hover:bg-/],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
}
