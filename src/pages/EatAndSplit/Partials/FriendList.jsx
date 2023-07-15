import Friend from "./Friend"

const FriendList = ({friends, selectFriend, selected}) => {
  return (
    <>
        <div className="freind-list w-full max-w-md ease-in-out duration-300">
            {
                (friends?.length > 0) &&friends.map((friend) => {
                    return (
                        <Friend key={`friend-${friend.id}`} friend={friend} selectFriend={selectFriend} selected={selected} />
                    )
                })
            }
        </div>
    </>
  )
}

export default FriendList