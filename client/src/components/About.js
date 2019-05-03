import React from 'react';

export function About() {
    return (
        <div>
            <h1>About Hackless</h1>
            <div>
                <details>
                   <summary> Why the name?</summary>
                    <p>Honestly, it's an anagram of my last name and I've always found it amusing.</p>
                </details>
                <details>
                    <summary>Why a URL shortener?</summary>
                    <p>
                        I'd been doing a lot of work with hash tables and discovered that the way that a url shortening service works is primarily by creating aliases, using a hash function of some kind to create a unique identifier, and then storing both into a database so that you can access one with the other and then using a redirect so that entering the shortened URL would lead to a URL redirect to the expanded address.
                        Honestly, I just thought it would be fun.
                    </p>
                </details>
                <details>
                    <summary>Where can I see more of your work?</summary>
                    <p>
                        So glad you asked!  <a href="https://amyshackles.com">Here's a link to my portfolio!</a>
                    </p>
                </details>
            </div>
        </div>
    )
}
