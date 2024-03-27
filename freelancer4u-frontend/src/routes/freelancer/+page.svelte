<script>
    import axios from "axios";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    // Similar to the jobs page, you'll use the $page.url.origin for the API root.
    const api_root = $page.url.origin;

    let freelancers = [];
    let newFreelancer = {
        name: "",
        email: "",
    };

    onMount(() => {
        getFreelancers();
    });

    function getFreelancers() {
        var config = {
            method: "get",
            url: api_root + "/api/freelancer",
            headers: {},
        };

        axios(config)
            .then(function (response) {
                freelancers = response.data;
            })
            .catch(function (error) {
                alert("Could not get freelancers");
                console.log(error);
            });
    }

    function createFreelancer() {
        var config = {
            method: "post",
            url: api_root + "/api/freelancer",
            headers: {
                "Content-Type": "application/json",
            },
            data: newFreelancer,
        };

        axios(config)
            .then(function (response) {
                alert("Freelancer created");
                getFreelancers();
            })
            .catch(function (error) {
                alert("Could not create freelancer");
                console.log(error);
            });
    }
</script>

<h1 class="mt-3">Create Freelancer</h1>
<form class="mb-5">
    <div class="row mb-3">
        <div class="col">
            <label class="form-label" for="name">Name</label>
            <input
                bind:value={newFreelancer.name}
                class="form-control"
                id="name"
                type="text"
            />
        </div>
        <div class="col">
            <label class="form-label" for="email">E-Mail</label>
            <input
                bind:value={newFreelancer.email}
                class="form-control"
                id="email"
                type="email"
            />
        </div>
    </div>
    <button type="button" class="btn btn-primary" on:click={createFreelancer}
        >Submit</button
    >
</form>

<h1>All Freelancers</h1>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">E-Mail</th>
        </tr>
    </thead>
    <tbody>
        {#each freelancers as freelancer}
            <tr>
                <td>{freelancer.name}</td>
                <td>{freelancer.email}</td>
            </tr>
        {/each}
    </tbody>
</table>
