/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

export { };

declare global {
  namespace GQL {
    /*******************************
     *                             *
     *          TYPE DEFS          *
     *                             *
     *******************************/
    export interface Query {
      _empty?: string;
      
      /**
       *  login as a user 
       */
      loginUser?: User;
      
      /**
       *  get a user's public data
       */
      getUser?: PublicUser;
      
      /**
       *  get all posts 
       */
      getPosts?: Array<Post | null>;
    }
    
    /**
     *  used for logging in 
     */
    export interface InputLogin {
      email: string;
      password: string;
    }
    
    /**
     *  a type defining a user  
     */
    export interface User {
      id?: string;
      name?: string;
      email?: string;
      token?: string;
    }
    
    /**
     *  a type defining a user's public data 
     */
    export interface PublicUser {
      id?: string;
      name?: string;
      email?: string;
    }
    
    export interface Post {
      id?: string;
      userId?: string;
      text?: string;
      user?: PublicUser;
      timestamp?: string;
    }
    
    export interface Mutation {
      _empty?: string;
      
      /**
       *  register a new user 
       */
      registerUser?: User;
      
      /**
       *  create a new post 
       */
      createPost?: Post;
    }
    
    /**
     *  used for creating a new user 
     */
    export interface InputRegisterUser {
      name: string;
      email: string;
      password: string;
    }
    
    /**
     *  input to create a new post 
     */
    export interface InputCreatePost {
      text?: string;
    }
    
    export interface Subscription {
      _empty?: string;
      
      /**
       *  called when a new post is created 
       */
      postCreated?: Post;
    }
    
    /*********************************
     *                               *
     *         TYPE RESOLVERS        *
     *                               *
     *********************************/
    /**
     * This interface define the shape of your resolver
     * Note that this type is designed to be compatible with graphql-tools resolvers
     * However, you can still use other generated interfaces to make your resolver type-safed
     */
    export interface Resolver {
      Query?: QueryTypeResolver;
      User?: UserTypeResolver;
      PublicUser?: PublicUserTypeResolver;
      Post?: PostTypeResolver;
      Mutation?: MutationTypeResolver;
      Subscription?: SubscriptionTypeResolver;
    }
    export interface QueryTypeResolver<TParent = any> {
      _empty?: QueryTo_emptyResolver<TParent>;
      loginUser?: QueryToLoginUserResolver<TParent>;
      getUser?: QueryToGetUserResolver<TParent>;
      getPosts?: QueryToGetPostsResolver<TParent>;
    }
    
    export interface QueryTo_emptyResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface QueryToLoginUserArgs {
      input: InputLogin;
    }
    export interface QueryToLoginUserResolver<TParent = any, TResult = any> {
      (parent: TParent, args: QueryToLoginUserArgs, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface QueryToGetUserArgs {
      id: string;
    }
    export interface QueryToGetUserResolver<TParent = any, TResult = any> {
      (parent: TParent, args: QueryToGetUserArgs, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface QueryToGetPostsResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface UserTypeResolver<TParent = any> {
      id?: UserToIdResolver<TParent>;
      name?: UserToNameResolver<TParent>;
      email?: UserToEmailResolver<TParent>;
      token?: UserToTokenResolver<TParent>;
    }
    
    export interface UserToIdResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface UserToNameResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface UserToEmailResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface UserToTokenResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PublicUserTypeResolver<TParent = any> {
      id?: PublicUserToIdResolver<TParent>;
      name?: PublicUserToNameResolver<TParent>;
      email?: PublicUserToEmailResolver<TParent>;
    }
    
    export interface PublicUserToIdResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PublicUserToNameResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PublicUserToEmailResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PostTypeResolver<TParent = any> {
      id?: PostToIdResolver<TParent>;
      userId?: PostToUserIdResolver<TParent>;
      text?: PostToTextResolver<TParent>;
      user?: PostToUserResolver<TParent>;
      timestamp?: PostToTimestampResolver<TParent>;
    }
    
    export interface PostToIdResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PostToUserIdResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PostToTextResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PostToUserResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface PostToTimestampResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface MutationTypeResolver<TParent = any> {
      _empty?: MutationTo_emptyResolver<TParent>;
      registerUser?: MutationToRegisterUserResolver<TParent>;
      createPost?: MutationToCreatePostResolver<TParent>;
    }
    
    export interface MutationTo_emptyResolver<TParent = any, TResult = any> {
      (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface MutationToRegisterUserArgs {
      input: InputRegisterUser;
    }
    export interface MutationToRegisterUserResolver<TParent = any, TResult = any> {
      (parent: TParent, args: MutationToRegisterUserArgs, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface MutationToCreatePostArgs {
      input: InputCreatePost;
    }
    export interface MutationToCreatePostResolver<TParent = any, TResult = any> {
      (parent: TParent, args: MutationToCreatePostArgs, context: any, info: GraphQLResolveInfo): TResult;
    }
    
    export interface SubscriptionTypeResolver<TParent = any> {
      _empty?: SubscriptionTo_emptyResolver<TParent>;
      postCreated?: SubscriptionToPostCreatedResolver<TParent>;
    }
    
    export interface SubscriptionTo_emptyResolver<TParent = any, TResult = any> {
      resolve?: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => TResult;
      subscribe: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => AsyncIterator<TResult>;
    }
    
    export interface SubscriptionToPostCreatedResolver<TParent = any, TResult = any> {
      resolve?: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => TResult;
      subscribe: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => AsyncIterator<TResult>;
    }
    
  }
}