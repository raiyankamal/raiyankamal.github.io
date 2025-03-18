# Managing Artifacts with gcloud

(Copied from gcloud documentation)

To list images under the current project, repository, and location:

    $ gcloud artifacts docker images list

To list images under repository my-repo, project my-project, in
us-central1:

    $ gcloud artifacts docker images list \
        us-central1-docker.pkg.dev/my-project/my-repo

To list images with tags, under repository my-repo, project my-project
across all locations:

    $ gcloud artifacts docker images list \
        docker.pkg.dev/my-project/my-repo --include-tags

To list all images under image busy-box, in repository my-repo, project
my-project across all locations:

    $ gcloud artifacts docker images list \
        docker.pkg.dev/my-project/my-repo/busy-box

To delete image busy-box in us-west1 and all of its digests and tags:

    $ gcloud artifacts docker images delete
    us-west1-docker.pkg.dev/my-project/my-repository/busy-box

To delete image digest abcxyz under image busy-box:

    $ gcloud artifacts docker images delete
    us-west1-docker.pkg.dev/my-project/my-repository/busy-box@sha256:abcxyz

To delete image digest abcxyz under image busy-box while there're some
other tags associate with the digest:

    $ gcloud artifacts docker images delete
    us-west1-docker.pkg.dev/my-project/my-repository/busy-box@sha256:abcxyz
    --delete-tags

To delete an image digest and its only tag my-tag under image busy-box:

    $ gcloud artifacts docker images delete
    us-west1-docker.pkg.dev/my-project/my-repository/busy-box:my-tag