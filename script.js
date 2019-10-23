// Address Book Class
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let person = new Contact(name, email, phone, relation);
    this.contacts.push(person);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

function print(book) {
  for (const contact of book.contacts) {
    console.log(contact);
  }
}

const book = new AddressBook();

book.add("Grant", "grant@example.com", "1234", "boss");
book.add("Todd", "todd@example.com", "54321", "coworker");
book.add("Larry", "larry@example.com", "54321", "coworker");
book.add("Moe", "moe@example.com", "54321", "coworker");
book.add("Curly", "moe@example.com", "54321", "coworker");
console.log(book);
book.deleteAt(3);

console.log(book);

print(book);
