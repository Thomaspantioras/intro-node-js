const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs

// one way is to use dirname like
// const contactsLocation = __dirname + './contacts.json' // but some issues, doesn't work on Windows or have no idea what dirname is, may be a slash. So to fix this:
const contactsLocation = path.join(__dirname, './contacts.json')

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contactsFile = fs.readFileSync(contactsLocation, {encoding: 'utf-8'}).toString()
  return JSON.parse(contactsFile)
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2)) // null, 2 make a neat view in json file
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

