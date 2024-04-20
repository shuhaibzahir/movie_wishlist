
export const addWishListIntoLocalStorage = (data, userEmail, wishListName) => {
    let wishList = localStorage.getItem("wishlist");
    wishList = wishList ? JSON.parse(wishList) : {}
    const existUser = wishList[userEmail] || {}
    localStorage.setItem("wishlist", JSON.stringify({...wishList, [userEmail]:{movies:[...existUser?.movies||[], data], name: wishListName} }))
};

export const removeWishListFromLocalStorage = (userEmail,imdbID, wishListName) => {
    let wishList = localStorage.getItem("wishlist");
    wishList = wishList ? JSON.parse(wishList) : {}
    const existUser = wishList[userEmail] || {}
    const updatedList = existUser.movies?.filter(item => item.imdbID!== imdbID)
    localStorage.setItem("wishlist", JSON.stringify({...wishList,[userEmail]:{movies:updatedList, name: wishListName}  }))
}