<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">⚡ Bank Soal Demo </a>
    </div>
    <div class=" hidden md:flex-none md:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/user/xxx/post/">Upload</a></li>
            <li>
                <details>
                    <summary> Kategori </summary>
                    <ul class="p-2 bg-base-100 z-10">
                        <li><a href="/kategori/ujian-akhir">Ujian Akhir Semester</a></li>
                        <li> <a href="/kategori/ujian-tengah">Ujian Tengah Semester</a></li>
                    </ul>
                </details>
            </li>
        </ul>
        <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered w-24 h-10 md:w-auto" />
        </div>
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://live.staticflickr.com/65535/52845885269_492c5c3ec2.jpg" />
                </div>
            </label>
            <ul
                tabindex="0"
                class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10"
            >
                <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>
</div>