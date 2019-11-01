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
    // index = Number(index);
    // this.contacts = [
    //   this.contacts.splice(0, index),
    //   this.contacts.splice(index + 1)
    // ];
    // this.contacts.splice(index, 1);
    // }

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

const addressBook = new AddressBook();

addressBook.add("Grant Smith", "grant@example.com", "234-547-2342", "boss");
addressBook.add(
  "Todd Pendergrass",
  "todd@example.com",
  "234-547-2342",
  "coworker"
);
addressBook.add(
  "Larry Munson",
  "larry@example.com",
  "234-547-2342",
  "coworker"
);
addressBook.add("Moe", "moe@example.com", "234-547-2342", "coworker");
addressBook.add("Curly", "moe@example.com", "234-547-2342", "coworker");
console.log(addressBook);
addressBook.deleteAt(3);

console.log(addressBook);

print(addressBook);

function display() {
  document.querySelector("#contact-list").innerHTML = "";
  addressBook.contacts.forEach((contact, index) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("contact_box");
    newEntry.innerHTML = `
    <p>Name: ${contact.name}</p>
    <p>Email: ${contact.email}</p>
    <p>Phone: ${contact.phone}</p>
    <p>Relation: ${contact.relation}</p>
    <i class="fa fa-trash" data-index-number=${index} aria-hidden="true"></li>`;
    document.querySelector("#contact-list").appendChild(newEntry);
  });
}

display();

const form = document.querySelector("form");

form.addEventListener("submit", addContact);

function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}

document
  .querySelector("#contact-list")
  .addEventListener("click", deleteContact);

function deleteContact(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index-number");
    console.log(index);
    addressBook.deleteAt(index);
    display();
  }
}
