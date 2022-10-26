const ul = document.querySelector("#ul");
const favoritar = document.querySelector("#favoritar");
const fullContent = document.querySelector("#fullContent");
const user = document.querySelector("#user");
const favTitle = document.querySelector("#favTitle");

const fetchUser = async () => {
  const data = await fetch(`https://api.github.com/users/${user.value}`).then(
    (res) => res.json()
  );

  const createUser = () => {
    const containUsers = document.querySelector("#containUsers");

    const div = document.createElement("div");

    div.innerHTML = `
    <ul
    id="ul"
    class="grid grid-cols-5 py-4 bg-black sm:gap-6 px-2 border-b-violet-500 border-b-[1px]"
  >
    <li class="flex gap-1 col-span-2 sm:flex-row flex-col">
      <img
        src="${data.avatar_url}"
        class="w-10 h-10 rounded-full"
      />
      <label class="flex flex-col">
        <span class="text-sm">${data.name}</span>
        <span class="text-xs text-gray-300">${data.login}</span>
      </label>
    </li>
    <li class="font-bold">${data.public_repos}</li>
    <li class="font-bold">${data.followers}</li>
    <li class="text-red-400 text-sm font-bold cursor-pointer" id="remover">Remover</li>
  </ul>

    `;

    containUsers.appendChild(div);

    fullContent.classList.remove("hidden");
    favTitle.classList.add("hidden");

    const remover = div.querySelector("#remover");
    remover.addEventListener("click", () => {
      confirm("Deseja excluir favorito?") ? div.remove() : false;
    });
  };
  createUser();
};

favoritar.addEventListener("click", fetchUser);
