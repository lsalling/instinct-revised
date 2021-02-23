import './OnlineUsers.scss';
import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Card} from '../../../components/card/Card';
import {UserLayout} from '../../../components/layout/user';
import {MiniJumbotron} from '../../../components/mini-jumbotron/MiniJumbotron';
import {
  Column,
  UserContainer,
  setURL,
  userService,
  UserContainerSkeleton,
} from '@instinct-web/core';

setURL('community/online', <OnlineUsers />);

export function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState<User[]>();
  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const users = await userService.getOnline();
      setOnlineUsers(users);
    }

    fetchUsers();
  }, []);

  return (
    <UserLayout section="online">
      <MiniJumbotron>
        <h1>Come join the party</h1>
        <p>Take a sneak peak at who's already online</p>
      </MiniJumbotron>
      <div className="page-content">
        <div className="row">
          <Column side="left">
            <Card>
              <div className="members-container">
                {onlineUsers === undefined && (
                  <>
                    <UserContainerSkeleton />
                    <UserContainerSkeleton />
                    <UserContainerSkeleton />
                  </>
                )}
                {onlineUsers?.map(_ => (
                  <UserContainer key={_.id} user={_} />
                ))}
                {onlineUsers?.length === 0 && (
                  <p>It looks like everybody is sleeping!</p>
                )}
              </div>
            </Card>
          </Column>
        </div>
      </div>
    </UserLayout>
  );
}
