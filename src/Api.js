class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.token = token;
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })

    }
    getProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })

    }
    addProduct(body) {

        return fetch(`${this.path}/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }

    updProduct(id, body) {
        return fetch(`${this.path}/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })

    }
    delProduct() {

    }
    logIn(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    signUp() {

    }
    showProfile() {
        return fetch(`${this.path}/v2/group-7/users/me`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }

    setLike(id, flag) {
        return fetch(`${this.path}/products/likes/${id}`, {
            method: flag ? "PUT" : "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }

    getReviews(id) {
        return fetch(`${this.path}/products/review/${id}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

    setReviews(id, body) {
        return fetch(`${this.path}/products/review/${id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }

    delReview(productId, reviewId) {
        return fetch(`${this.path}/products/review/${productId}/${reviewId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }

}

export default Api;