import React, { useState, useEffect } from 'react';
import Home from "./Home";

const Contests = () => {
    const [contests, setContests] = useState([]);
    const [accounts, setAccounts] = useState([]);

    const getData = () => {
        fetch('contests.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setContests(myJson)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const getData2 = () => {
        fetch('accounts.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setAccounts(myJson)
            });
    }

    useEffect(() => {
        getData2()
    }, [])

    //javascript

    const map1 = new Map();
    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];

        if (map1.has(account.contest_id)) {
            map1.set(account.contest_id, map1.get(account.contest_id) + 1);
        } else {
            map1.set(account.contest_id, 1);
        }
    }

    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Contest Name</th>
                        <th>Number of Contests</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contests && contests.length > 0 && contests.map((contest) => (
                        <tr key={contest.id}>
                            <td>{contest.name}</td>
                            <td>{map1.get(contest.id)}</td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    );

};


export default Contests;