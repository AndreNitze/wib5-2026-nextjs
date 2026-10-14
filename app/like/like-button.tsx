'use client'

export default function LikeButton({likes}: {likes: number}) {

    return  (
        <div>
        <strong>{likes}</strong> geliket (innerer Zustand/State)!<br/>
    </div>
    );
}