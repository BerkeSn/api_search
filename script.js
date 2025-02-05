const searchGithub = async ()=>{
    // Get the username from the input field
    const username = document.getElementById("searchInput").value;

    // Fetch user data from GitHub API
    const response = await fetch(`https://api.github.com/users/${username}`);

    // Select the container where details will be displayed
    const detailsContainer = document.querySelector(".details");
    const data = await response.json();

    if(response.ok){
        // Show the details container if the response is successful
        detailsContainer.style.display = "flex";

        // Populate the result container with user details
        document.getElementById("result").innerHTML = `
        <div class="profile">
            <div class="profile-image">
                <img src="${data.avatar_url}"/>
            </div>
            <div class="profile-details">
                <h2 class="name">${data.name || data.login}</h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${data.bio || "Hesapta bio bilgisi yok."}</p>
                
                <div class="stats">
                    <div>
                        <div class="stats-name">
                            Public Repo Sayısı
                        </div>
                        <div class="stats-value">
                            ${data.public_repos}
                        </div>
                    </div>

                    <div>
                        <div class="stats-name">
                            Takipçi Sayısı
                        </div>
                        <div class="stats-value">
                            ${data.fallowers || "0"}
                        </div>
                    </div>

                    <div>
                        <div class="stats-name">
                            Takip Edilen Sayısı
                        </div>
                        <div class="stats-value">
                            ${data.fallowing || "0"}
                        </div>
                    </div>
                </div>

                <div class="media">
                    <p>
                        <span class="media-value">
                            ${data.location || "Bilgi Yok"}
                        </span>
                    </p>

                    <p>
                        <span class="media-value">
                            ${data.blog || "Bilgi Yok"}
                        </span>
                    </p>

                    <p>
                        <span class="media-value">
                            ${data.twitter_username || "Bilgi Yok"}
                        </span>
                    </p>

                    <p>
                        <span class="media-value">
                            ${data.company || "Bilgi Yok"}
                        </span>
                    </p>
                </div>

            </div>
        </div>`
    }else{
        // Show an alert if the API request fails
        alert(data.message);
    }
}
