const config = {
    appWriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    appWriteProjectId: String(process.env.REACT_APP_PROJECT_ID),
    appWriteDatabaseId: String(process.env.REACT_APP_DATABASE_ID),
    appWriteCollectionId: String(process.env.REACT_APP_COLLECTION_ID),
    appWriteBucketId: String(process.env.REACT_APP_BUCKET_ID),
}

export default config