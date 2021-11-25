export function ProfileCard(props) {
    let remainingHabits = props.items;

    return (
        <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-7">
                <div class="card p-3 py-4">
                    <div class="text-center"> <img src="img/andrew.jpeg" width="200" class="rounded-circle"/> </div>
                    <div class="text-center mt-3"> 
                        <h5 class="mt-2 mb-0">Alexender Schmidt</h5> <span>UI/UX Designer</span>
                        <div class="px-4 mt-1">
                            <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                            <div class="dropdown">
                                <div class="buttons"> <button onclick = "clickFunction()" class="btn btn-outline-primary px-4">View Remaining Habits</button> </div>
                                <div id="remainingHabitDropdown" class="dropdown-content">
                                    <a href="#"></a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}