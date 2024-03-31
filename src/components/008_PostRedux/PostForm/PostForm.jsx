import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getPostAsync} from "../PostAsyncApi.js";
import {useNavigate, useParams} from "react-router-dom";
import {updatePostAsync} from "../../006_PostAsync/PostAsyncApi.js";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required().length(20),
    description: yup.string().required(),
  })
  .required()

export function PostForm() {
  const { postId } = useParams();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm(
    { resolver: yupResolver(schema) }
  );

  const loadData = async () => {
    const post = await getPostAsync(postId);
    setValue('title', post.title);
    setValue('description', post.description);
  };

  useEffect(() => {
    loadData();
  }, []);

  async function submit(data) {
    if (postId) {
      await updatePostAsync(postId, data);
      // navigate('/posts');
    }
  }

  return (
    <div>
      <h2>Post Form</h2>

      <form onSubmit={handleSubmit(submit)}>
        <input type="text"
               {...register('title')}
               aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title?.type === 'required' && <span>This field is required</span>}

        <input type="text"
               {...register('description')}
               aria-invalid={errors.description ? "true" : "false"}
        />
        <p>{errors.description?.message}</p>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}